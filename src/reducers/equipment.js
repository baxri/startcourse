import * as actionTypes from '../actions/types';

const schema = {
  id: 'int64',
  userId: 'int64',
  weightCapLbs: 'int64',
  volumeCapUnits: 'int64',
  make: 'string',
  model: 'string',
  nickName: 'string',
  equipmentYear: 'int32',
  numAxles: 'int32',
  heightInches: 'int32',
  grossVehicleWeightRating: 'int32',
  equipmentType: 'string'
};

// - "Car"
// - "Wagon"
// - "Minivan"
// - "Van"
// - "PickupTruck"
// - "GarbageTruck"
// - "TractorTruck"
// - "SnubcabTruck"
// - "WreckerTruck"
// - "LargeAutoTransportTruck"
// - "DumpTruck"
// - "BoxTruck"
// - "DeliveryTruck"
// - "SmallEnclosedTrailer"
// - "SmallAutoTransportTrailer"
// - "FlatbedTrailer"
// - "FlatbedTrailerWithRails"
// - "HorseTrailer"
// - "LiquidTrailer"
// - "LoggingTrailer"
// - "GravelTrailer"
// - "VanTrailer"
// - "IntermodalTrailer"
// - "RefrigeratorTrailer"
// - "Other"

const initialState = {
  schema: schema,
  token: null,
  equipment: {
    // Caching with 
  },
  equipments: [

  ],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case actionTypes.SET_EQUIPMENTS:
      return {
        ...state,
        equipments: action.payload,
      };
    // ...other actions
    default:
      return state;
  }
}