defmodule Solution do
  def is_even(x) do
    Integer.mod(x, 2) === 0
  end
end

# read the lines
lines = String.split(IO.read(:stdio, :all))
with_index = Enum.with_index(lines)

# print only evens
Enum.each(with_index, fn(x) ->
  { num, i } = x
  if (Solution.is_even(i + 1)) do
    IO.puts(num)
  end
end)
