# 1 + x + x^2/2! + x^3/3! + x^4/4!...

defmodule Solution do
  def factorial(x) when x === 1, do: x

  def factorial(x), do: x + factorial(x - 1)
end

IO.puts(Solution.factorial(3))
