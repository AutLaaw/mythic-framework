Config = {
    Components = {
        AFK = {
            Enabled = true,
            Options = {
                AFKTimer = 1800
            }
        },
        Ping = {
            Enabled = false,
            Options = {
                MaxPing = 300,
            },
        },
        GodMode = {
            Enabled = true,
            Options = {},
        },
        NoClip = {
            Enabled = true,
            Options = {},
        },
        Invis = {
            Enabled = true,
            Options = {},
        },
        Hp = {
            Enabled = true,
            Options = {},
        },
        Armor = {
            Enabled = true,
            Options = {},
        },
        Spectator = {
            Enabled = true,
            Options = {},
        },
        Weapon = {
            Enabled = true,
            Options = {},
        },
        GiveWeapon = {
            Enabled = true,
            Options = {},
        },
        RemoveWeapon = {
            Enabled = true,
            Options = {},
        },
        Explosions = {
            Enabled = true,
            Options = {
                Types = { 1, 2, 4, 5, 25, 32, 33, 35, 36, 37, 38 },
                Count = 5,
            }
        },
    },

    AuthorizedOverrides = {
        ['Base'] = { Allowed = true, GodMode = true, NoClip = true, Invis = true, Hp = false, Armor = false },
        ['Hospital'] = { Allowed = true, GodMode = true, NoClip = false, Invis = false, Hp = false, Armor = false }
    },

	BlacklistedSceneTypes = {
		"WORLD_VEHICLE_MILITARY_PLANES_SMALL",
		"WORLD_VEHICLE_MILITARY_PLANES_BIG",
	},
	BlacklistedSceneGroups = {
		2017590552,
		2141866469,
		1409640232,
		`ng_planes`,
	},
	BlacklistedVehs = {
		[`SHAMAL`] = true,
		[`LUXOR`] = true,
		[`LUXOR2`] = true,
		[`JET`] = true,
		[`LAZER`] = true,
		[`BUZZARD`] = true,
		[`BUZZARD2`] = true,
		[`ANNIHILATOR`] = true,
		[`SAVAGE`] = true,
		[`TITAN`] = true,
		[`RHINO`] = true,
		[`POLICE`] = true,
		[`POLICE2`] = true,
		[`POLICE3`] = true,
		[`POLICE4`] = true,
		[`POLICEB`] = true,
		[`POLICET`] = true,
        [`RIOT`] = true,
        [`RIOT2`] = true,
		[`SHERIFF`] = true,
		[`SHERIFF2`] = true,
        [`AMBULAN`] = true,
        [`AMBULANCE`] = true,
        [`MILJET`] = true,
        [`PBUS`] = true,
		[`FIRETRUK`] = true,
        [`BLIMP`] = true,
        [`BLIMP2`] = true,
        [`OPPRESSOR`] = true,
        [`OPPRESSOR2`] = true,
        [`OPPRESSOR2`] = true,
        [`CARACARA2`] = true,
        [`TECHNICAL`] = true,
        [`TECHNICAL2`] = true,
        [`TECHNICAL3`] = true,
        [`INSURGENT2`] = true,
        [`TRAILERSMALL2`] = true,
        [`SCARAB`] = true,
        [`SCARAB2`] = true,
        [`THRUSTER`] = true,
        [`MINITANK`] = true,
        [`CHERNOBOG`] = true,
        [`KHANJALI`] = true,
        [`HALFTRACK`] = true,
        [`DINGHY5`] = true,
        [`PATROLBOAT`] = true,
        [`HUNTER`] = true,
        [`VALKYR2`] = true,
        [`VALKYR`] = true,
        [`SKYLIFT`] = true,
        [`AKULA`] = true,
        [`VOLATOL`] = true,
        [`AVENGER`] = true,
        [`AVENGER2`] = true,
        [`BOMBUSHKA`] = true,
        [`HYDRA `] = true,
        [`CARGOPLANE`] = true,
        [`TULA`] = true,
        [`STRIKEFORCE`] = true,
        [`ALKONOST`] = true,
        [`TUG`] = true,
        [`PROPTRAILER`] = true,
        [`BOXVILLE5`] = true,
        [`CARGOBOB`] = true,
        [`CARGOBOB2`] = true,
        [`BESRA`] = true,
        [`BARRACKS`] = true,
        [`BARRACKS2`] = true,
        [`CRUSADER`] = true,
        [`VETIR`] = true,
        [`ARMYTANKER`] = true,
        [`MENACER`] = true,
        [`polmav`] = true,
        [`zentorno`] = true,
        [`benson`] = true,
        [`monster`] = true,
	},
	BlacklistedPeds = {
		[`s_m_y_ranger_01`] = true,
		[`s_m_y_sheriff_01`] = true,
		[`s_m_y_cop_01`] = true,
		[`s_f_y_sheriff_01`] = true,
		[`s_f_y_cop_01`] = true,
		[`s_m_y_hwaycop_01`] = true,
        [`csb_cop`] = true,
        [-13220879687] = true,
        [1702441027] = true,
        [`mp_m_securoguard_01`] = true,
        [`s_m_m_security_01`] = true,
        [`s_m_m_marine_01`] = true,
        [`s_m_y_marine_01`] = true,
        [`s_m_y_marine_02`] = true,
        [`s_m_y_marine_03`] = true,
        [`s_m_y_fireman_01`] = true,
        [`s_m_y_swat_01`] = true,
        [`s_m_y_uscg_01`] = true,
        [`s_m_y_blackops_01`] = true,
        [`s_m_y_blackops_02`] = true,
        [`s_m_y_blackops_03`] = true,
        [`s_m_m_prisguard_01`] = true,
        [`s_m_y_prismuscl_01`] = true,
        [`s_m_y_prisoner_01`] = true,
        [`u_m_y_prisoner_01`] = true,
        [`s_m_y_armymech_01`] = true,
        [-265970301] = true,
        [-220552467] = true,
        [`g_m_importexport_01`] = true,
        [`g_m_y_mexgoon_01`] = true,
        [`g_m_y_mexgoon_02`] = true,
        [`g_m_y_mexgoon_03`] = true,
        [`g_m_y_mexgoon_04`] = true,
        [`g_m_y_pologoon_01`] = true,
        [`g_m_y_pologoon_02`] = true,
        [`g_m_y_salvaboss_01`] = true,
        [`g_m_y_salvagoon_01`] = true,
        [`g_m_y_salvagoon_02`] = true,
        [`g_f_y_ballas_01`] = true,
        [`g_f_y_families_01`] = true,
        [`g_f_y_families_01`] = true,
	},
    BanResources = {
        ['mythic-base'] = true,
        ['mythic-admin'] = true,
        ['mythic-characters'] = true,
        ['mythic-damage'] = true,
        ['mythic-chat'] = true,
        ['mythic-commands'] = true,
        ['mythic-escort'] = true,
        ['mythic-hud'] = true,
        ['mythic-inventory'] = true,
        ['mythic-menu'] = true,
        ['mythic-police'] = true,
        ['mythic-phone'] = true,
        ['mythic-robbery'] = true,
        ['mythic-targeting'] = true,
        ['screenshot-basic'] = true,
    }
}