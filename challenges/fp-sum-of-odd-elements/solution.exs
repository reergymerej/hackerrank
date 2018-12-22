defmodule Solution do
  def is_odd(x) do
    rem(x, 2) === 1
  end
end

lines = String.split(IO.read(:stdio, :all))

nums = Enum.map(lines, fn(x) -> String.to_integer(x) end)

odds = Enum.filter(nums, fn(x) -> Solution.is_odd(x) end)

result = Enum.reduce(odds, 0, fn(x, acc) -> x + acc end)

IO.puts(result)
