import {
  IQuickBattleBattleQueueRegister,
  IQuickBattleCheckOpponentAction,
  IQuickBattleRoundAction,
} from "./socket-types/client-to-server-events";
import {
  IQuickBattleBattleRoomJoined,
  IError,
  IQuickBattleRoundActionResponse,
} from "./socket-types/server-to-client-events";

export interface ServerToClientEvents {
  error: (data: IError) => void;
  quickBattleWaitingForOpponent: () => void;
  quickBattleBattleRoomJoined: (data: IQuickBattleBattleRoomJoined) => void;
  quickBattleBattleRoomCreated: () => void;
  quickBattleCancelBattleRequestSuccess: () => void;
  quickBattleRoundActionWaitingForOpponent: () => void;
  quickBattleRoundActionResponse: (data: IQuickBattleRoundActionResponse) => void;
}

export interface ClientToServerEvents {
  quickBattleBattleQueueRegister: (data: IQuickBattleBattleQueueRegister) => void;
  quickBattleCheckBattleRoomCreated: () => void;
  quickBattleJoinBattleRoomRequest: () => void;
  quickBattleCancelBattleRequest: () => void;
  quickBattleRoundAction: (data: IQuickBattleRoundAction) => void;
  quickBattleCheckOpponentAction: (data: IQuickBattleCheckOpponentAction) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  userId: number;
}
