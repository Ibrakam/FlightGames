import Link from 'next/link'
import { ArrowLeft, Users, Clock, Star, Play, Trophy, Sword, Grid3X3, Ship, CircleDot, Zap, Type, Hand } from 'lucide-react'

const games = [
  {
    id: 'tic-tac-toe',
    title: 'Крестики-нолики',
    description: 'Классическая игра для двоих игроков',
    icon: Grid3X3,
    players: '2 игрока',
    difficulty: 'Легкая',
    duration: '5 мин',
    status: 'available'
  },
  {
    id: 'battleship',
    title: 'Морской бой',
    description: 'Стратегическая игра на море',
    icon: Ship,
    players: '2 игрока',
    difficulty: 'Средняя',
    duration: '15 мин',
    status: 'available'
  },
  {
    id: 'checkers',
    title: 'Шашки',
    description: 'Традиционная логическая игра',
    icon: CircleDot,
    players: '2 игрока',
    difficulty: 'Сложная',
    duration: '20 мин',
    status: 'available'
  },
  {
    id: 'connect-four',
    title: 'Четыре в ряд',
    description: 'Быстрая тактическая игра',
    icon: Trophy,
    players: '2 игрока',
    difficulty: 'Средняя',
    duration: '10 мин',
    status: 'available'
  },
  {
    id: 'word-game',
    title: 'Слова',
    description: 'Игра на составление слов',
    icon: Type,
    players: '2-4 игрока',
    difficulty: 'Средняя',
    duration: '15 мин',
    status: 'available'
  },
  {
    id: 'rock-paper-scissors',
    title: 'Камень-ножницы-бумага',
    description: 'Быстрая игра реакции',
    icon: Hand,
    players: '2 игрока',
    difficulty: 'Легкая',
    duration: '3 мин',
    status: 'available'
  }
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Легкая':
      return 'text-green-600 bg-green-50 border-green-200'
    case 'Средняя':
      return 'text-orange-600 bg-orange-50 border-orange-200'
    case 'Сложная':
      return 'text-red-600 bg-red-50 border-red-200'
    default:
      return 'text-slate-600 bg-slate-50 border-slate-200'
  }
}

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Header */}
      <header className="relative border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-slate-600 hover:text-primary-blue transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Назад</span>
            </Link>
            <div className="w-px h-6 bg-slate-300" />
            <h1 className="text-2xl font-bold text-dark-navy">Выберите игру</h1>
          </div>
        </div>
      </header>

      {/* Games Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game) => {
            const IconComponent = game.icon
            return (
              <div
                key={game.id}
                className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 overflow-hidden"
              >
                {/* Card Header */}
                <div className="relative z-10 p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary-blue/10 rounded-lg group-hover:bg-primary-blue/20 transition-colors duration-200">
                      <IconComponent className="w-6 h-6 text-primary-blue" />
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-500">
                      <Users className="w-4 h-4" />
                      <span>{game.players}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-dark-navy mb-2 group-hover:text-primary-blue transition-colors duration-200">
                    {game.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {game.description}
                  </p>

                  {/* Game Info */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border ${getDifficultyColor(game.difficulty)}`}>
                      <Star className="w-3 h-3" />
                      {game.difficulty}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200">
                      <Clock className="w-3 h-3" />
                      {game.duration}
                    </span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="relative z-10 px-6 pb-6">
                  <button className="w-full bg-primary-blue hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md">
                    <Play className="w-4 h-4" />
                    Играть
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary-blue/5 to-sky-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            )
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-blue/10 mb-4">
              <Zap className="w-8 h-8 text-sky-blue" />
            </div>
            <h2 className="text-2xl font-bold text-dark-navy mb-4">
              Играйте во время полета
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Все игры работают без подключения к интернету и созданы специально для развлечения пассажиров. 
              Приглашайте попутчиков и проводите время с удовольствием!
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}