local core = "esx" -- esx or qb 


if (core == 'esx') then 
    ESX = exports['es_extended']:getSharedObject()
elseif ( core == 'qb' ) then 
    QBCore = exports["qb-core"]:GetCoreObject()
end

RegisterCommand('coords', function() 
    OpenUI()
end)


function OpenUI()
    SetNuiFocus(true, true)
    local ped = PlayerPedId()
    local curCoords = GetEntityCoords(ped)
    local currHeading = GetEntityHeading(ped)
    local testx = ('%.3f'):format(curCoords.x)
    local testy = ('%.3f'):format(curCoords.y)
    local testz = ('%.3f'):format(curCoords.z)
    local stringHeading = ('%.4f'):format(currHeading)
    print(test)
    SendNUIMessage({
        type = "open",
        _charPosx = testx,
        _charPosy = testy,
        _charPosz = testz,
        _charHeading = stringHeading,
    })
end

RegisterNUICallback('int:close', function(data)
    SetNuiFocus(false, false)
end)
  

RegisterNUICallback('int:noty', function(data)
    if (core == 'esx') then 
        ESX.ShowNotification(data.noti)
    elseif ( core == 'qb' ) then 
        QBCore.Functions.Notify(data.noti)
    end
end)
  


