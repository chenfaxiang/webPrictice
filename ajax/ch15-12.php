<?php>
//如果没有传入查询字符串，那么将无法搜索
if(empty($_REQUEST['state'])) {
    echo "No State Sent";
}
else {
    $search = trim($_REQUEST['state']);
    switch($search) {
        case "MO" :
            $result = "<ul><li>St.Louis</li>".
                      "<li>Kansas City</li></ul>";
            break;
        case "WA" :
            $result = "<ul><li>sEATTLE</li>".
                      "<li>sPOKANE</li>".
                      "<li>Olympis</li></ul>";
            break;
        case "CA" :
            $result = "<ul><li>San Francisco</li>".
                      "<li>Los Angeles</li>".
                      "<li>Web 2.0 City</li>".
                      "<li>BarCamp</li></ul>";
            break;
        case "ID" :
            $result = "<ul><li>Boise</li></ul>";
            break;
        default :
            $result = "No Cities Found!";
            break;
    }
    echo "<h3>Cities:</h3><p>" . $result . "</p>";
}
<?>