# cat input.txt | elixir solution.exs

defmodule Solution do
  def print_n_times(x, n) when n <= 1 do
    IO.puts(x)
  end

  def print_n_times(x, n) do
    IO.puts(x)
    print_n_times(x, n - 1)
  end
end

# read input
input = IO.read(:stdio, :all)
lines = String.split(input)

# 1st line is repeat count
count = String.to_integer(hd(lines))

# remaining lines are ints to repeat
items = tl(lines)
Enum.each(items, fn(x) -> Solution.print_n_times(x, count) end)
