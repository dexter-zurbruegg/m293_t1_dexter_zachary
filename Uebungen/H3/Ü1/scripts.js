document.getElementById('favoriteGame').addEventListener('change', function() {
    if (this.value === 'other') {
        document.getElementById('otherGameGroup').style.display = 'block';
    } else {
        document.getElementById('otherGameGroup').style.display = 'none';
    }
});

document.getElementById('regularSpielOther').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('regularOtherGameGroup').style.display = 'block';
    } else {
        document.getElementById('regularOtherGameGroup').style.display = 'none';
    }
});

document.getElementById('regularSpielNone').addEventListener('change', function() {
    if (this.checked) {
        document.querySelectorAll('input[name="regularSpiele"]:not(#regularSpielNone)').forEach(function(checkbox) {
            checkbox.checked = false;
        });
        document.getElementById('regularOtherGameGroup').style.display = 'none';
    }
});

document.querySelectorAll('input[name="regularSpiele"]:not(#regularSpielNone)').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('regularSpielNone').checked = false;
        }
    });
});

document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const output = {};
    formData.forEach((value, key) => {
        if (output[key]) {
            if (!Array.isArray(output[key])) {
                output[key] = [output[key]];
            }
            output[key].push(value);
        } else {
            output[key] = value;
        }
    });
    document.getElementById('formData').textContent = JSON.stringify(output, null, 2);
});
