defmodule Solution do
end

lines = String.split(IO.read(:stdio, :all))
count = String.to_integer(hd(lines))

IO.puts(0..(count - 1))
