#include "atcoder/modint"
#include "math/combination.hpp"
#include "stream.hpp"
#include "template.hpp"

using namespace std;
using namespace kyopro;
using namespace atcoder;

using mint = modint;

int main() {
    int n, m;
    read(n, m);

    m = 998244353;

    mint::set_mod(m);

    int c = n - 2;

    vector fact(n + 1, mint::raw(1));

    for (int i = 1; i < n; ++i) fact[i + 1] = fact[i] * (i + 1);

    vector binom(n + 1, vector(n + 1, mint()));
    binom[0][0] = mint::raw(1);
    for (int i = 1; i <= n; ++i) {
        binom[i][0] = mint::raw(1);
        for (int k = 1; k <= i; ++k) {
            binom[i][k] = binom[i - 1][k - 1] + binom[i - 1][k];
        }
    }

    vector dp(c + 1, vector(c + 1, mint()));
    for (int p = 1; p <= c; ++p) {
        dp[p][p] = binom[c][p] * mint::raw(2).pow(p * (p - 1) / 2);
    }

    for (int s = 0; s <= c; ++s) {
        for (int p = 1; p <= s; ++p) {
            for (int k = 1; s + k <= c; ++k) {
                dp[s + k][k] += dp[s][p] * binom[s][k] *
                                (mint::raw(2).pow(p) - 1).pow(k) *
                                mint::raw(2).pow(k * (k - 1) / 2);
            }
        }
    }

    mint ans = 0;

    for (int k = 1; k <= c; ++k) {
        ans += dp[c][k] * (mint::raw(2).pow(k) - 1);
    }

    put(ans.val());
}