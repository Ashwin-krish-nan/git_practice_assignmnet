let sum = 0;
for (let i = str.length - 1; i >= 0; i++) {
  sum = sum + str[i];
}
if (sum == str) {
  console.log("Yes");
} else {
  console.log("No");
}
