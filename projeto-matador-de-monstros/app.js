new Vue ({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: []
    },
    computed: {
      hasResult() {
        return  this.playerLife == 0 || this.monsterLife == 0;
      }
    },
    methods: {
        startGame() {
          this.running = true;
          this.monsterLife = 100;
          this.playerLife = 100;
          this.logs = [];
        },
        attack(especial) {
          this.hurt('playerLife', 7, 12, false, 'jogador', 'monstro', 'player');
          if(this.monsterLife > 0) {
            this.hurt('monsterLife', 5, 10, especial, 'monstro', 'jogador',  'monster');
          }
        },
        hurt(prop, min, max, especial, source, target, cls) {
          const plus = especial ? 5 : 0;
          const hurt = this.getRandom(min + plus, max + plus);
          this[prop] = Math.max(this[prop] - hurt, 0);
          this.registerLog(`${source} atingiu o ${target} com força de ${hurt}.`,cls);
        },
        heal() {
          const heal = this.getRandom(10,15);
          this.playerLife = Math.min(this.playerLife + heal, 100);
          this.registerLog(`O jogador ganhou ${heal}pts de life.`, 'player');
        },
        healAndHurt() {
          this.heal();
          this.hurt('playerLife', 7, 12, false, 'monstro', 'jogador',  'monster');
        },
        getRandom (min, max) {
          const value = Math.random() * (max - min) + min;
          return Math.round(value);
        },
        registerLog(text, cls) {
          this.logs.unshift({text , cls})
        },
        giveUp() {
          this.monsterLife = 100;
          this.playerLife = 100;
          this.running = false;
          this.logs = []
        }

    },
    watch: {
      hasResult(value) {
        if (value)  this.running = false;
      }
    }
})