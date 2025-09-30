# Lab 4 – Reports API

This lab adds protected report endpoints and SQL JOIN queries to explore relationships between users, profiles, roles, referrals, and logins.

---

## JOIN Queries Explained

1. **Users with Roles (INNER JOIN)**  
   Shows each user along with their assigned role(s). Only users who have a role are included.

2. **Users with Profiles (LEFT JOIN)**  
   Returns all users and their profile details if available. Users without a profile still appear with `NULL` values.

3. **Roles Right Join (RIGHT JOIN)**  
   Ensures all roles are shown, even if no users are assigned to them.

4. **Profiles Full Outer (LEFT JOIN + RIGHT JOIN via UNION)**  
   Simulates a full outer join by combining left and right joins. All users and all profiles appear, even without matches.

5. **User Role Combinations (CROSS JOIN)**  
   Produces every possible pairing of users and roles. Demonstrates Cartesian product joins.

6. **Referrals (SELF-JOIN)**  
   Shows which users referred other users. Both referrer and referred are from the same `users` table with different aliases.

7. **Latest Login per User (Subquery + LEFT JOIN)**  
   Returns each user with their most recent login IP and timestamp. Users without login history still appear with `NULL` values.

---

## API Endpoints

All endpoints require authentication (JWT Bearer Token in `Authorization` header).

| Endpoint                                | Purpose                                                                 |
|-----------------------------------------|-------------------------------------------------------------------------|
| `GET /api/reports/users-with-roles`     | Lists users with their assigned roles.                                  |
| `GET /api/reports/users-with-profiles`  | Lists users with profile info, showing `NULL` if no profile exists.     |
| `GET /api/reports/roles-right-join`     | Lists all roles, even if unassigned.                                    |
| `GET /api/reports/profiles-full-outer`  | Shows all users and profiles (simulated full outer join).               |
| `GET /api/reports/user-role-combos`     | Shows every possible user/role combination (Cartesian product).         |
| `GET /api/reports/referrals`            | Lists which users referred other users.                                 |
| `GET /api/reports/latest-login`         | Shows the latest login activity for each user.                          |

---

## Testing

1. Login to obtain a JWT (reuse Lab 3 login endpoint).  
2. In Postman, set `Authorization → Bearer Token = {{token}}`.  
3. Call each `/api/reports/...` endpoint.  
4. Capture screenshots of successful responses and one negative test (e.g., missing token → `401 Unauthorized`).  
