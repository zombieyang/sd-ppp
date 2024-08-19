
# need refactor
document_data = dict()
def set_sd_document_data(data):
    global document_data
    document_data = data
def get_sd_document_data():
    return document_data

special_get_layer_options = []
def set_special_get_layer_options(data):
    global special_get_layer_options
    special_get_layer_options = data
def get_special_get_layer_options():
    return special_get_layer_options

special_get_bound_layer_options = []
def set_special_get_bound_layer_options(data):
    global special_get_bound_layer_options
    special_get_bound_layer_options = data
def get_special_get_bound_layer_options():
    return special_get_bound_layer_options

special_send_layer_options = []
def set_special_send_layer_options(data):
    global special_send_layer_options
    special_send_layer_options = data
def get_special_send_layer_options():
    return special_send_layer_options

special_send_bound_layer_options = []
def set_special_send_bound_layer_options(data):
    global special_send_bound_layer_options
    special_send_bound_layer_options = data
def get_special_send_bound_layer_options():
    return special_send_bound_layer_options