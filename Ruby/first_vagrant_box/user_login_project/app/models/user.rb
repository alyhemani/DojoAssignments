class User < ActiveRecord::Base
	EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
	validates :first_name,:last_name, presence: true, length: { minimum: 2}
	validates :email_address, presence: true, uniqueness: {case_sensitive: false}, format: { with: EMAIL_REGEX }
	validates :age, presence: true, numericality: { greater_than_or_equal_to: 10, less_than: 150}

	before_save :downcase_email
	after_create :successfully_created
	after_update :successfully_updated
	before_validation :default_age, on: [:create]

		def full_name
			puts "#{self.first_name} #{self.last_name}"
		end
	private
		def self.average_age
			self.sum(:age)/self.count
		end
		def downcase_email
			self.email_address.downcase!
		end
		def successfully_created
			puts "Succesfully created a new user"
		end
		def successfully_updated
			puts "Succesfully updated an exisiting user"
		end
		def default_age
			self.age = 0 unless self.age?
		end
end
