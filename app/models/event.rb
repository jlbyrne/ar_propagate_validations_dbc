class Event < ActiveRecord::Base
	validate :validate_correct_date

	validates :organizer_email, :format => { :with => /.+\@.+\..+/,
    	:message => "that is not a valid email address" }

	validates :organizer_email, :organizer_name, :title, :date, presence: true
	validates :title, uniqueness: true

	def validate_correct_date
		errors.add(:date, "can't be in the past") if date < Date.today
	end
end
