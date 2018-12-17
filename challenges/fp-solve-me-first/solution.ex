defmodule Solution do
  input = IO.read(:stdio, :all)
  lines = String.split(input)
  ints = Enum.map(lines, fn x -> String.to_integer x end)
  result = List.foldl(ints, 0, fn x, acc -> x + acc end)
  IO.puts(result)
end
