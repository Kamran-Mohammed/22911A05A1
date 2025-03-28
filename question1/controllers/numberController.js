const axios = require("axios");

exports.calculate = async (req, res, next) => {
  const endpoints = {
    p: "primes",
    f: "fibo",
    r: "rand",
    e: "even",
  };

  const response1 = await axios.post("http://20.244.56.144/test/auth", {
    companyName: "Affordmed",
    clientID: "56083498-5cb8-4c5c-9742-c8346168bafc",
    clientSecret: "aNVzswwLBLalAXjd",
    ownerName: "Kamran",
    ownerEmail: "kamranabdulbasith@gmail.com",
    rollNo: "22911A05A1",
  });

  const token = response1.data.access_token;

  const response = await axios.get(
    `http://20.244.56.144/test/${endpoints[req.params.id]}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const numbers = response.data.numbers;
  console.log(numbers);

  const uniqueNumbers = [];
  let sum = 0;

  for (let num of numbers) {
    if (!uniqueNumbers.includes(num)) {
      uniqueNumbers.push(num);
      sum += num;
    }
  }

  const avg = sum / uniqueNumbers.length;

  console.log(avg);

  res.status(200).json({
    // status: "success",
    // id: req.params.id,
    numbers: uniqueNumbers,
    avg,
  });
};
