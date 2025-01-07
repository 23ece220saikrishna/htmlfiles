echo "Enter a number: "
read num
original=$num
reversed=0
while [ $original -gt 0 ]; do
digit=$(( $original % 10 ))
reversed=$(( $reversed * 10 + $digit ))
original=$(( $original / 10 ))
done
echo "Reversed number: $reversed"