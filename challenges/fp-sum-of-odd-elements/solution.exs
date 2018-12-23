defmodule Solution do
  def is_odd(x) do
    rem(x, 2) !== 0
  end
end

String.split(IO.read(:stdio, :all))
  |> Enum.map(fn(x) -> String.to_integer(x) end)
  |> Enum.filter(fn(x) -> Solution.is_odd(x) end)
  |> Enum.reduce(0, fn(x, acc) -> x + acc end)
  |> IO.puts()
