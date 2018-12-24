# 1 + x + x^2/2! + x^3/3! + x^4/4!...

defmodule Solution do
  def factorial(x) when (x === 1), do: x

  def factorial(x) when (x > 1), do: x + factorial(x - 1)

  def pow(_, y) when (y === 0), do: 1

  def pow(x, y) when (y === 1), do: x

  def pow(x, y) when (y > 0), do: x * pow(x, y - 1)

  def pow(x, y) when (y < 0), do: 1 / pow(x, abs(y))
end

IO.puts(Solution.pow(2, -3))
