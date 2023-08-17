// const morningRoutine = async (startTime) => {
//   const step1FinishTime = await shower[startTime];
//   const step2FinishTime = await eatbreakfast[step1FinishTime];
//   const step3FinishTime = await getdressed[step2FinishTime];
//   const step4FinishTime = await drinkcoffee[step3FinishTime];
//   const step5FinishTime = await readnews[step4FinishTime];
//   return step5FinishTime;
// };

// morningRoutine("7:00 AM");
// console.log(morningRoutine);



const morningRoutine = async (startTime) => {
  const shower = async (startTime) => {
    // Hier würden die Duschvorgänge ausgeführt werden
    const finishTime = new Date(startTime);
    finishTime.setMinutes(finishTime.getMinutes() + 15);
    return finishTime;
  };

  const eatBreakfast = async (startTime) => {
    // Hier würde das Frühstück zubereitet und gegessen werden
    const finishTime = new Date(startTime);
    finishTime.setMinutes(finishTime.getMinutes() + 30);
    return finishTime;
  };

  const getDressed = async (startTime) => {
    // Hier würde das Anziehen erfolgen
    const finishTime = new Date(startTime);
    finishTime.setMinutes(finishTime.getMinutes() + 10);
    return finishTime;
  };

  const drinkCoffee = async (startTime) => {
    // Hier würde der Kaffee getrunken werden
    const finishTime = new Date(startTime);
    finishTime.setMinutes(finishTime.getMinutes() + 20);
    return finishTime;
  };

  const readNews = async (startTime) => {
    // Hier würden die Nachrichten gelesen werden
    const finishTime = new Date(startTime);
    finishTime.setMinutes(finishTime.getMinutes() + 15);
    return finishTime;
  };

  const routineStartTime = parseTime(startTime);
  const step1FinishTime = await shower(routineStartTime);
  const step2FinishTime = await eatBreakfast(step1FinishTime);
  const step3FinishTime = await getDressed(step2FinishTime);
  const step4FinishTime = await drinkCoffee(step3FinishTime);
  const step5FinishTime = await readNews(step4FinishTime);
  return step5FinishTime;
};

const parseTime = (timeString) => {
  const [hourStr, minuteStr, period] = timeString.split(/:| /);
  let hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);
  
  if (period === "PM" && hour !== 12) {
    hour += 12;
  } else if (period === "AM" && hour === 12) {
    hour = 0;
  }

  const date = new Date();
  date.setHours(hour);
  date.setMinutes(minute);
  return date;
};

const formatTime = (time) => {
  return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const routineStartTime = "7:00 AM";
morningRoutine(routineStartTime).then((finishTime) => {
  console.log("Morning routine finished at:", formatTime(finishTime));
});
