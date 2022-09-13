for (i = 2; i <= num; i++) {
  if (num % i == 0) break;
}
if (num == i) {
  console.log("Yes");
} else {
  console.log("No");
}
