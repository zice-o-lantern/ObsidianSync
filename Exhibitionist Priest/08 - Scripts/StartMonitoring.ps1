### SET FOLDER TO WATCH + FILES TO WATCH + SUBFOLDERS YES/NO
    $watcher = New-Object System.IO.FileSystemWatcher
    $watcher.Path = "D:\shin\Documents\ObsidianSync\Exhibitionist Priest\01 - Zettelkastem\"
    $watcher.Filter = "*renpy.md*"
    $watcher.IncludeSubdirectories = $true
    $watcher.EnableRaisingEvents = $true  

### DEFINE ACTIONS AFTER AN EVENT IS DETECTED
    $action = { $path = $Event.SourceEventArgs.FullPath
                $changeType = $Event.SourceEventArgs.ChangeType
                $logline = "$(Get-Date), $changeType, $path"
                python "D:\shin\Documents\Renpy\Exhibitionist Priest\renpy_parser\main.py" "D:\shin\Documents\ObsidianSync\Exhibitionist Priest\01 - Zettelkastem\Styrofoam Castle\EN\renpy.md" "D:\shin\Documents\Renpy\Exhibitionist Priest\game\story\styrofoam_castle.rpy"
                python "D:\shin\Documents\Renpy\Exhibitionist Priest\renpy_parser\main.py" "D:\shin\Documents\ObsidianSync\Exhibitionist Priest\01 - Zettelkastem\Styrofoam Castle\FR\renpy.md" "D:\shin\Documents\Renpy\Exhibitionist Priest\temp\styrofoam_castle_fr.rpy"
                python "D:\shin\Documents\Renpy\Exhibitionist Priest\renpy_parser\localisation.py" "D:\shin\Documents\Renpy\Exhibitionist Priest\game\tl\french\story\styrofoam_castle.rpy" "D:\shin\Documents\Renpy\Exhibitionist Priest\game\story\styrofoam_castle.rpy" "D:\shin\Documents\Renpy\Exhibitionist Priest\temp\styrofoam_castle_fr.rpy"
                Add-content "D:\log.txt" -value $logline
            }    
### DECIDE WHICH EVENTS SHOULD BE WATCHED 
    Register-ObjectEvent $watcher "Created" -Action $action
    Register-ObjectEvent $watcher "Changed" -Action $action
    Register-ObjectEvent $watcher "Deleted" -Action $action
    Register-ObjectEvent $watcher "Renamed" -Action $action
    while ($true) {sleep 5}