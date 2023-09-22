import { defineStore } from 'pinia';

export const useTournamentStore = defineStore('tournamentStore', {
  state: () => ({
    tournaments: [], // initialize the tournaments array
  }),

  getters: {
    getTournament: (state) => state.tournament,
  },

  actions: {
    async deleteTournament(id) {
      try {
        // send a DELETE request to the server
        const res = await fetch(`http://localhost:3000/tournaments/${id}`, {
          method: 'DELETE',
        });

        if (res.ok) {
          // remove the tournament from the local state
          this.tournaments = this.tournaments.filter(t => t.id !== id);

          // redirect to a specific page or route after successful deletion
          router.push('/tournament');
        } else {
        
          const errorMessage = await res.text();
          console.error('Delete error:', errorMessage);
        }
      } catch (error) {
      
        console.error('Delete error:', error);
      }
    },

    async addTournament(newTournament) {
      try {
        
        // send a POST request to your API to add a new tournament
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

        // assuming the API returns the newly added tournament data
        const addedTournament = await response.json();
        this.tournaments.push(addedTournament);
  
       

        // return addedTournament;
      } catch (error) {
        console.error('Error adding tournament:', error);
        throw error; 
      }
    },
    async updateTournament(updatedTournament) {
      try {
        // send a PUT request to update the tournament
        const response = await fetch(`http://localhost:3000/tournaments/${updatedTournament.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedTournament),
        });

        if (!response.ok) {
          throw new Error('Failed to update tournament');
        }


        const updatedData = await response.json();

        // update the store's tournaments array with the updated data
        const index = this.tournaments.findIndex((t) => t.id === updatedData.id);
        if (index !== -1) {
          this.tournaments[index] = updatedData;
        }

        return updatedData;
      } catch (error) {
        console.error('Error updating tournament:', error);
        throw error;
      }
    },
    
  },
});
