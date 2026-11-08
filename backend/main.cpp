#include <iostream>
#include "sqlite3.h"

using namespace std;

int main()
{
    sqlite3 *DB;

    int exit = sqlite3_open("../db/db.sqlite", &DB);

    if (exit == SQLITE_OK)
    {
        cout << "Database connected successfully!" << endl;
    }
    else
    {
        cout << "Unable to connect to database!" << endl;
    }

    sqlite3_close(DB);

    return 0;
}