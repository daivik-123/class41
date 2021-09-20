class Player {
    constructor() {
        this.index = null;
        this.positionX = 0;
        this.positionY = 0;
        this.name = null;
        this.score =0;
        this.rank = 0 ;
        this.fuel = 185;
        this.life=185;
        
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    getCarsAtEnd(){
        database.ref('carsAtEnd').on("value",(data)=>{
            this.rank = data.val();
        })
    }

    static updateCarsAtEnd(rank){
        database.ref("/").update({
            carsAtEnd : rank
        })
    }

    
}
