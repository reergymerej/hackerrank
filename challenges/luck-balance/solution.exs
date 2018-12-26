# The first line contains two space-separated integers  and , the number of preliminary contests and the maximum number of important contests Lena can lose.
# Each of the next  lines contains two space-separated integers,  and , the contest's luck balance and its importance rating.
IO.read(:stdio, :all)
  |> String.split()
  |> Enum.each(fn(x) -> IO.puts(x) end)
