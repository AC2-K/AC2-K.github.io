---

title: "ARC059 E - キャンディーとN人の子供"
date: "2025-03-28" 

---

# ARC059 E - キャンディーとN人の子供

## 問題リンク

- [https://atcoder.jp/contests/arc059/tasks/arc059_c](https://atcoder.jp/contests/arc059/tasks/arc059_c)

## 解法

FPSを用いて解く

$i$ 人目に何個お菓子を配るかという情報を **$z$ を不定元とする** 形式的冪級数 $$\displaystyle F_i(x_i)=(1+x_iz+x_i^2z+\cdots)=\frac{1}{1-x_iz}$$ を用いて表すことにすると

$$f(x_1,x_2,\dots,x_N)=[z^C](F_1(x_i)F_2(x_2)\cdots F_N(x_N))$$

であることが分かるだろう. 

よって, 求めるべきは

$$
\displaystyle
\begin{aligned}
\sum_{x_1=A_1}^{B_1}\sum_{x_2=A_2}^{B_2}\cdots\sum_{x_N=A_N}^{B_N}{[z^C]\left(\prod_{i=1}^{n}{F_i(x_i)}\right)}
&=[z^c]{\left(\sum_{x_1=A_1}^{B_1}\sum_{x_2=A_2}^{B_2}\cdots\sum_{x_N=A_N}^{B_N}\prod_{i=1}^{N}{F_i(x_i)}\right)}
\\
&=[z^C]\left(\left(\sum_{x_1=A_1}^{B_1}{F_1(x_1)}\right)\left(\sum_{x_2=A_2}^{B_2}{F_2(x_2)}\right)\cdots\left(\sum_{x_N=A_N}^{B_N}{F_N(x_N)}\right)\right)
\end{aligned}
$$

と表せる. したがって, 各 $i$ に対する $\sum_{x_i=A_i}^{B_i}{F_i(x_i)}$ , 及びそれらの積を $C$ 次の項まで計算することができれば良い. これは愚直にやっても間に合う.

以上の通りに実装すると大体 $O(NC^2)$ ぐらいになり間に合う.

## 提出

- https://atcoder.jp/contests/arc059/submissions/64240873