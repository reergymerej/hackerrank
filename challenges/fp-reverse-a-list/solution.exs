defmodule Solution do
  def reverse(desination_list, unreversed_list) when length(unreversed_list) === 0 do
    desination_list
  end

  def reverse(desination_list, unreversed_list) do
    {last, rest} = List.pop_at(unreversed_list, -1)
    Solution.reverse(desination_list ++ [last], rest)
  end

  def reverse(unreversed_list) do
    Solution.reverse([], unreversed_list)
  end
end

input = IO.read(:stdio, :all)
lines = String.split(input)
result = Solution.reverse(lines)
Enum.each(result, fn(x) -> IO.puts(x) end)
