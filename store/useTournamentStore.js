// src/store/useTournamentStore.js
import { defineStore } from 'pinia';

export const useTournamentStore = defineStore('tournamentStore', {
  state: () => ({
    tournaments: [], // Initialize the tournaments array
  }),

  getters: {
    getTournament: (state) => state.tournament,
  },

  actions: {
    async deleteTournament(id) {
      try {
        // Send a DELETE request to the server
        const res = await fetch(`http://localhost:3000/tournaments/${id}`, {
          method: 'DELETE',
        });

        if (res.ok) {
          // Remove the tournament from the local state
          this.tournaments = this.tournaments.filter(t => t.id !== id);

          // Redirect to a specific page or route after successful deletion
          router.push('/tournament');
        } else {
          // Handle any error response from the server
          const errorMessage = await res.text();
          console.error('Delete error:', errorMessage);
        }
      } catch (error) {
        // Handle any network or other errors
        console.error('Delete error:', error);
      }
    },

    async addTournament(newTournament) {
      try {
        
        // Send a POST request to your API to add a new tournament
        const response = await fetch('http://localhost:3000/tournaments/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTournament),
        });

        if (!response.ok) {
          throw new Error('Failed to add tournament');
        }

        // Assuming the API returns the newly added tournament data
        const addedTournament = await response.json();
        this.tournaments.push(addedTournament);
        // Update the store's tournaments array with the newly added tournament
       

        // return addedTournament;
      } catch (error) {
        console.error('Error adding tournament:', error);
        throw error; 
      }
    },
  },
});
