# cat input.txt | elixir solution.exs

defmodule Solution do
end

# read input
# line 1 has threshold
# lines 2.. have numbers
# print lines under threshold

lines = String.split(IO.read(:stdio, :all))
threshold = String.to_integer(hd(lines))

Enum.each(tl(lines), fn(x) ->
  int = String.to_integer(x)
  if (int < threshold) do
    IO.puts(int)
  end
end)
