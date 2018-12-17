defmodule Solution do
  input = IO.read(:stdio, :line)
  int = String.to_integer(input)
  r = 1..int
  Enum.each(r, fn _ -> IO.puts("Hello World") end)
end
