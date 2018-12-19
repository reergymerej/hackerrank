lines = String.split(IO.read(:stdio, :all))
count = String.to_integer(hd(lines))
range = 0..(count - 1)
joined = Enum.join(range, ", ")
result = "[#{joined}]"

IO.puts(result)
