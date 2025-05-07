
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const BirthdayPage = () => {
  useEffect(() => {
    const audio = new Audio("./background.mp3");
    audio.play();
    return () => audio.pause();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 bg-cover bg-center" 
         style={{ backgroundImage: "url('./background.png')" }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl bg-black/80 rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-6 text-center">37 лет — идеальный возраст</h1>
          <p className="text-lg mb-4 leading-relaxed">
            Одно дело — мчать по дороге.<br/>
            Другое — уметь поймать правильную волну звука.<br/><br/>
            Ты — гонщик жизни. Теперь ты ещё и боец на новом фронте — папа.<br/>
            Но одно правило остаётся прежним: хорошая скорость требует правильного саундтрека.<br/><br/>
            Уже в пути к тебе — устройство, которое:<br/>
            — Уберёт лишний шум.<br/>
            — Подбросит нужный ритм.<br/>
            — Будет рядом в любой дороге: на мотоцикле, в машине или на прогулке с наследником.<br/><br/>
            Подсказка:<br/>
            Носится ближе к сердцу — на ушах.<br/>
            Дружит с Bluetooth.<br/>
            Легче шлема, но не менее важно.<br/><br/>
            Ожидай. Загрузка идёт.<br/><br/>
            <strong>Team Ride or Die</strong>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default BirthdayPage;
