# count how many input lines without using count, size, or length

IO.read(:stdio, :all)
  |> String.split()
  |> length()
  |> IO.puts()
