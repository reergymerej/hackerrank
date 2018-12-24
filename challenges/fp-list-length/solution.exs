defmodule Solution do
  def get_count(list, count) do
    case list  do
      [h|t] ->
        get_count(t, count + 1)
      _ ->
        count
    end
  end
end

IO.read(:stdio, :all)
  |> String.split()
  |> Solution.get_count(0)
  |> IO.puts()
