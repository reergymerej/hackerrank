defmodule Solution do
  lines =
    IO.read(:stdio, :all)
    |> String.split
  ints = Enum.map(lines, fn x -> String.to_integer x end)

  IO.puts(
    List.foldl(ints, 0, fn x, acc -> x + acc end)
  )
end
