CREATE TABLE nba2017advancedteamstats (
    rk INT NOT NULL,
    team varchar(255),
    age decimal(10,2),
    wins INT,
    losses INT,
    pythagWins decimal(10,2),
    pythaglosses decimal(10,2),
    margin decimal(10,2),
    sos decimal(10,2),
    srates decimal(10,2),
    ortg decimal(10,2),
    drtg decimal(10,2),
    pace decimal(10,2),
    ftr decimal(10,3),
    threepar decimal(10,3),
    trueshoot decimal(10,3),
    oefgp decimal(10,3),
    otovp decimal(10,2),
    orbp decimal(10,2),
    oftpfga decimal(10,3),
    defgp decimal(10,3),
    dtovp decimal(10,2),
    drbp decimal (10,2),
    dftpfga decimal(10,3),
    arena varchar(255),
    attendance INT,
    attpg decimal(10,2),
    PRIMARY KEY (rk)
)