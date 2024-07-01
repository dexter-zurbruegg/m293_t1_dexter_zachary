document.getElementById('favoriteGame').addEventListener('change', function() {
    if (this.value === 'other') {
        document.getElementById('otherGameGroup').style.display = 'block';
    } else {
        document.getElementById('otherGameGroup').style.display = 'none';
    }
});

document.getElementById('regularGameOther').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('regularOtherGameGroup').style.display = 'block';
    } else {
        document.getElementById('regularOtherGameGroup').style.display = 'none';
    }
});

document.getElementById('regularGameNone').addEventListener('change', function() {
    if (this.checked) {
        document.querySelectorAll('input[name="regularGames"]:not(#regularGameNone)').forEach(function(checkbox) {
            checkbox.checked = false;
        });
        document.getElementById('regularOtherGameGroup').style.display = 'none';
    }
});

document.querySelectorAll('input[name="regularGames"]:not(#regularGameNone)').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('regularGameNone').checked = false;
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

document.getElementById('uploadImage').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('uploadedImage');
            img.src = e.target.result;
            img.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});
