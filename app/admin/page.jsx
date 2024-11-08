import React from "react"

export default function Admin() {
    return (
        <>
            <h1>Administration</h1>

            <section id="admin-controls">
                <a href="/admin/bar/add"><button>Ajouter un bar</button></a>
                <a href="/admin/tournament/add"><button>Ajouter un tournoi</button></a>
                <a href="/admin/ranking"><button>Gérer les scores</button></a>
            </section>

            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Lieu</th>
                            <th>Date d'inscription</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <h2>Bars</h2>
                        {/* <% for (const bar of bars) { %>
                            <tr>
                                <td><%= bar.name %> <%= ' (' %><%= bar.city %> <%= ' - '%> <%= bar.zipcode %><%= ')' %></td>
                                <td><%= (new Date(bar.register_date)).toLocaleDateString('fr-FR') %></td>
                                <td>
                                    <a href="/admin/bar/<%= bar.id %>/delete"><button>Supprimer</button></a>
                                    <a href="/admin/bar/<%= bar.id %>/edit"><button>Modifier</button></a>
                                </td>
                            </tr>
                        <% } %> */}
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>Lieu</th>
                            <th>Date du tournoi</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <h2 id="tournaments-list">Tournois</h2>
                        {/* <% for (const tournament of tournaments) { %>
                            <tr>
                                <td><%= tournament.name %> <%= ' ('%><%=tournament.city %><%=') ' %></td>
                                <td><%= (new Date(tournament.date)).toLocaleDateString('fr-FR') %></td>
                                <td>
                                    <a href="/admin/tournament/<%= tournament.id %>/delete"><button>Supprimer</button></a>
                                    <a href="/admin/tournament/<%= tournament.id %>/edit"><button>Modifier</button></a>
                                </td>
                            </tr>
                        <% } %> */}
                    </tbody>
                </table>
                
            </section>
        </>
    )
};
