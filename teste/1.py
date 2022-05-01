dic = objeto = [{
 "message_tag": "TEMPERATURE_MIN",
 "element_dictionary": "INMET",
 "element": "MIN_AIR_TEMP_2M_C"
}, {
 "message_tag": "RELATIVE_HUMIDITY_MIN",
 "element_dictionary": "INMET",
 "element": "MIN_REL_HUMIDITY_2M_PCT"
}, {
 "message_tag": "temperature",
 "element": "AVG_AIR_TEMP_2M_C",
 "element_dictionary": "METAR"
}, {
 "message_tag": "PrecMin",
 "element_dictionary": "SIMEPAR_MET",
 "element": "DISCARDED",
}, {
 "message_tag": "Prec",
 "element_dictionary": "SIMEPAR_MET",
 "element": "ACCUM_PRECIP_2M_MM",
}]

newDic = {}

newList = []

final_list = []

for c in range(len(dic)-3):
    # print(dic[c]["element"])
    if dic[c]["element_dictionary"] == "INMET":
        newList += dic[c]["element"]
        word = "".join(newList)
        final_list.append(word)
        


print(final_list)


