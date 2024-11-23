let users = [
  {
    name: "Alice",
    balance: 1500,
    friends: ["Bob", "Charlie"],
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    name: "Bob",
    balance: 2400,
    friends: ["Alice", "Charlie"],
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Charlie",
    balance: 3100,
    friends: ["Alice"],
    skills: ["Node.js", "Python", "React"],
  },
];

let totalBalance = users.reduce((sum, user) => sum + user.balance, 0);
console.log("Загальна сума балансу:", totalBalance);

let friendName = "Alice";
let usersWithFriend = users
  .filter((user) => user.friends.includes(friendName))
  .map((user) => user.name);
console.log(
  `Користувачі, які мають друга з ім'ям ${friendName}:`,
  usersWithFriend
);

let sortedByFriends = users
  .slice()
  .sort((a, b) => b.friends.length - a.friends.length)
  .map((user) => user.name);
console.log("Користувачі, відсортовані за кількістю друзів:", sortedByFriends);

let uniqueSkills = users.reduce((acc, user) => {
  user.skills.forEach((skill) => {
    if (!acc.includes(skill)) {
      acc.push(skill);
    }
  });
  return acc;
}, []);

for (let i = 0; i < uniqueSkills.length; i++) {
  for (let j = i + 1; j < uniqueSkills.length; j++) {
    if (uniqueSkills[i] > uniqueSkills[j]) {
      let temp = uniqueSkills[i];
      uniqueSkills[i] = uniqueSkills[j];
      uniqueSkills[j] = temp;
    }
  }
}
console.log(
  "Унікальні та відсортовані в алфавітному порядку навички:",
  uniqueSkills
);
