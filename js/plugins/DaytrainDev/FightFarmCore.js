//=============================================================================
// RPG Maker MZ - FightFarmCore
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Core Systems for Fight Farm
 * @author Hob Daytrain
 *
 * @help FightFarmCore.js
 *
 * This plugin impliments core systems for FightFarm.
 * 
 * 
 * 
 */

const FRAMES_IN_SECOND = 60;
const SECONDS_IN_ROUND = 6;
const SECONDS_IN_MINUTE = 60;
const ROUNDS_IN_MINUTE = 10;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_SEASON = 90;
const SEASONS_IN_YEAR = 4;

const FF_INIT = {
  FightFarmSystem: {
    constants: {
      SEASONS_IN_YEAR,
      DAYS_IN_SEASON,
      HOURS_IN_DAY,
      MINUTES_IN_HOUR,
      ROUNDS_IN_MINUTE,
      SECONDS_IN_MINUTE,
      SECONDS_IN_ROUND,
      FRAMES_IN_SECOND
    },
    time: {
      frame: 0,
      second: 0,
      minute: 0,
      hour: 7,
      day: 1,
      season: 1,
      year: 800,
    },
    player: {
      scene: {
        map: 0,
        tileSet: 0,
      },
      location: {
        x: 0,
        y: 0,
        z: 0,
        terrain: 0,
        event: 0,
        tile1: undefined,
        tile2: undefined,
        tile3: undefined,
        tile4: undefined,
        region: undefined,
      },
      focus: {
        x: 0,
        y: 0,
        z: 0,
        terrain: 0,
        event: 0,
        tile1: undefined,
        tile2: undefined,
        tile3: undefined,
        tile4: undefined,
        region: undefined,
      }
    },
  }
};

// Timed Logic
const runYear = () => {

};
const runSeason = () => {
  // World Logic Happens Here

};
const runDay = () => {
  // Realm Logic Happens Here

};
const runHour = () => {

};
const runMinute = () => {
  // Zone Logic Happens Here

};
const runSecond = () => {
  // Region Logic Happens Here

};

const runRound = () => {
  // Action Logic Happens Here

  // NPCs and Enemies should decide what to do each round

  // Chunk Updates
  // There are 25 chunks in memory at a given time, a 5x5 grid
  // There are also 2 rows/cols of buffer chunks, which do not update
  
  console.log('Next Round:', {
    _this: this,
  });
  // for (targetChunkX = 0; targetChunkX < 5; targetChunkX++) {
  //   for (targetChunkY = 0; targetChunkY < 5; targetChunkY++) {
  //     updateChunk(targetChunkX,targetChunkY);
  //   }

  // }
};

const runFrame = () => {
  // debug args once per frame
};

const tick = () => {
  if (++DaytrainDev.FightFarmSystem.time.frame >= FRAMES_IN_SECOND) {
    DaytrainDev.FightFarmSystem.time.frame -= FRAMES_IN_SECOND;
    if (++DaytrainDev.FightFarmSystem.time.second >= SECONDS_IN_ROUND) {
      DaytrainDev.FightFarmSystem.time.second -= SECONDS_IN_ROUND;
      if (++DaytrainDev.FightFarmSystem.time.round > ROUNDS_IN_MINUTE) {
        DaytrainDev.FightFarmSystem.time.round -= ROUNDS_IN_MINUTE;
        if (++DaytrainDev.FightFarmSystem.time.minute >= MINUTES_IN_HOUR) {
          DaytrainDev.FightFarmSystem.time.minute -= MINUTES_IN_HOUR;
          if (++DaytrainDev.FightFarmSystem.time.hour >= HOURS_IN_DAY) {
            DaytrainDev.FightFarmSystem.time.hour -= HOURS_IN_DAY;
            if (++DaytrainDev.FightFarmSystem.time.day >= DAYS_IN_SEASON) {
              DaytrainDev.FightFarmSystem.time.day -= DAYS_IN_SEASON;
              if (++DaytrainDev.FightFarmSystem.time.season >= SEASONS_IN_YEAR) {
                DaytrainDev.FightFarmSystem.time.season -= SEASONS_IN_YEAR;
                ++DaytrainDev.FightFarmSystem.time.year;
                // year change logic
                runYear();
              };
              // season change logic
              runSeason();
            };
            // day change logic
            runDay();
          };
          // hour change logic
          runHour();
        };
      }
      // minute change logic
      runMinute();
    };
    // second change logic
    runSecond();
  };
  // frame change logic
  runFrame();
}

// TODO: make configurable
var DaytrainDev = DaytrainDev ?? FF_INIT;

  //=============================================================================
  // Core Init
  //=============================================================================
(() => {
  const pluginName = "FightFarmSystem";
  DaytrainDev.FightFarmSystem = DaytrainDev.FightFarmSystem ?? {};
  DaytrainDev.FightFarmSystem.parameters = PluginManager.parameters(pluginName);

  // init
  // DaytrainDev.FightFarmSystem.Game_Event_initialize = Game_Event.prototype.initialize;
  // Game_Event.prototype.initialize = function(mapId, eventId) {
  //   // override event initialization here

  //   DaytrainDev.FightFarmSystem.Game_Event_initialize.call(this, mapId, eventId);
  // }

  //=============================================================================
  // PluginManager
  //=============================================================================
  PluginManager.registerCommand(pluginName, "tick", tick);
})

if (!Game_Interpreter.FightFarm) {
  // init all systems
  Game_Interpreter.FightFarm = DaytrainDev.FightFarmSystem;
}