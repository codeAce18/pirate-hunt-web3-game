'use client';



// import { GameStartPage } from "./components/GameStartPage";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Home() {
  const router = useRouter();
 

  const handleStartGame = async () => {
    // Navigate to the gameintro page
    
    
    router.push('/gameintro');
  };
  useEffect(() =>{
    handleStartGame();
  },[]);

  return (
    <div className="lg:hidden md:hidden flex flex-col items-center justify-center h-screen">
      <h1 className="text-[20px]">Welcome to My Telegram Game</h1>
      <button
        onClick={handleStartGame}
        className="text-[16px] text-[#1A314E] underline bg-transparent border-none cursor-pointer"
      >
        Start Game
      </button>
    </div>
  );
}
