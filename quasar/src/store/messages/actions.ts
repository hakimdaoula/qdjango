import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { MessageState } from './state';
import axios from 'axios';

const actions: ActionTree<MessageState, StateInterface> = {
  someAction({ commit }) {
    axios.get('http://localhost:8090/api/messages').then(
      (response) => {
        commit('SET_MESSAGES', response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  },
};

export default actions;
