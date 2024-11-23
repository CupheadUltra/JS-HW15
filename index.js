let users = [
  {
    name: "Alice",
    balance: 1200,
    friends: [{ name: "Bob" }, { name: "Charlie" }],
    skills: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Bob",
    balance: 850,
    friends: [{ name: "Alice" }, { name: "Charlie" }],
    skills: ["Python", "JavaScript", "Django"],
  },
  {
    name: "Charlie",
    balance: 1450,
    friends: [{ name: "Alice" }],
    skills: ["CSS", "HTML", "React"],
  },
];

let totalBalance = users.reduce((sum, user) => sum + user.balance, 0);
console.log("Загальна сума балансу:", totalBalance); // 3500

let findUsersWithFriend = (friendName) =>
  users
    .filter((user) => user.friends.some((friend) => friend.name === friendName))
    .map((user) => user.name);

console.log(
  "Користувачі, які мають друга Charlie:",
  findUsersWithFriend("Charlie")
); // ["Alice", "Bob"]

let sortedByFriends = users
  .slice()
  .sort((a, b) => a.friends.length - b.friends.length)
  .map((user) => user.name);

console.log("Імена, відсортовані за кількістю друзів:", sortedByFriends); // ["Charlie", "Alice", "Bob"]

let uniqueSortedSkills = users
  .reduce((skills, user) => {
    user.skills.forEach((skill) => {
      if (!skills.includes(skill)) skills.push(skill);
    });
    return skills;
  }, [])
  .sort();

console.log("Унікальні вміння:", uniqueSortedSkills);
