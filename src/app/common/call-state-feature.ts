// see: https://github.com/manfredsteyer/standalone-example-cli/blob/arc-signal-store-custom-examples-typed/src/app/shared/util-common/call-state.feature.ts

import { Signal, computed } from '@angular/core';
import {
  SignalStoreFeature,
  signalStoreFeature,
  withComputed,
  withState,
} from '@ngrx/signals';

export type CallState = 'init' | 'loading' | 'loaded' | { error: string };

type NamedCallStateSlice<Prefix extends string> = {
  [K in Prefix as `${K}CallState`]: CallState;
};

type CallStateSlice = {
  callState: CallState
}

function getCallStateKeys( prefix?: string) {
  return {
    callStateKey: prefix ?  `${prefix}CallState` : 'callState',
    loadingKey: prefix ? `${prefix}Loading` : 'loading',
    loadedKey: prefix ? `${prefix}Loaded` : 'loaded',
    errorKey: prefix ? `${prefix}Error` : 'error',
  };
}

export function withCallState<Prefix extends string>(prefix: Prefix): SignalStoreFeature<
  { state: {}, signals: {}, methods: {} },
  {
    state: NamedCallStateSlice<Prefix>,
    signals: 
      {[K in Prefix as `${K}Loading`]: Signal<boolean>} &
      {[K in Prefix as `${K}Loaded`]: Signal<boolean>} &
      {[K in Prefix as `${K}Error`]: Signal<string | null>},
    methods: {}
  }
>;

// Overloading with External View
export function withCallState(prefix?: string): SignalStoreFeature<
  { state: {}, signals: {}, methods: {} },
  {
    state: {
      callState: CallState
    },
    signals: {
      loading: Signal<boolean>;
      loaded: Signal<boolean>;
      error: Signal<string | null>
    },
    methods: {}
  }
>;

// Implementation with Internal View
export function withCallState<Prefix extends string>(prefix: Prefix): SignalStoreFeature {
  const { callStateKey, errorKey, loadingKey, loadedKey } = getCallStateKeys(prefix);

  return signalStoreFeature(
    withState({ [callStateKey]: 'init' }),
    withComputed((state: Record<string, Signal<unknown>>) => {

      const callState = state[callStateKey] as Signal<CallState>;

      return {
        [loadingKey]: computed(() => callState() === 'loading'),
        [loadedKey]: computed(() => callState() === 'loaded'),
        [errorKey]: computed(() => {
          const v = callState();
          return typeof v === 'object' ? v.error : null;
        })
      }
    })
  );
}

export function setLoading<Prop extends string>(prop?: Prop): NamedCallStateSlice<Prop> | CallStateSlice {
  if (prop) {
    return { [`${prop}CallState`]: 'loading' } as NamedCallStateSlice<Prop>;
  }
  return { callState: 'loading' };
}

export function setLoaded<Prop extends string>(prop?: Prop): NamedCallStateSlice<Prop> | CallStateSlice {
  if (prop) {
    return { [`${prop}CallState`]: 'loaded' } as NamedCallStateSlice<Prop>;
  }
  return { callState: 'loaded' };
}

export function setInit<Prop extends string>(prop?: Prop): NamedCallStateSlice<Prop> | CallStateSlice {
  if (prop) {
    return { [`${prop}CallState`]: 'init' } as NamedCallStateSlice<Prop>;
  }
  return { callState: 'init' };
}

export function setError<Prop extends string>(error: string, prop?: Prop): NamedCallStateSlice<Prop> | CallStateSlice {
  if (prop) {
    return { [`${prop}CallState`]: { error } } as NamedCallStateSlice<Prop>;
  }
  return { callState: { error } };
}

/*

export function withCallState() {
  return signalStoreFeature(
    withState<{ callState: CallState }>({ callState: 'init' }),
    withComputed(({ callState }) => ({
      isLoading: computed(() => callState() === 'loading'),
      error: computed(() => {
        const state = callState();
        return typeof state === 'object' ? state.error : null
      }),
    }))
  );
}

export function setLoading(): { callState: CallState } {
  return { callState: 'loading' };
}

export function setLoaded(): { callState: CallState } {
  return { callState: 'loaded' };
}

export function setError(error: string): { callState: CallState } {
  return { callState: { error } };
} 

*/
