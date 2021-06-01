import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LicensemanagerLicenseConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#description LicensemanagerLicenseConfiguration#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#license_count LicensemanagerLicenseConfiguration#license_count}.
     */
    readonly licenseCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#license_count_hard_limit LicensemanagerLicenseConfiguration#license_count_hard_limit}.
     */
    readonly licenseCountHardLimit?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#license_counting_type LicensemanagerLicenseConfiguration#license_counting_type}.
     */
    readonly licenseCountingType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#license_rules LicensemanagerLicenseConfiguration#license_rules}.
     */
    readonly licenseRules?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#name LicensemanagerLicenseConfiguration#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#tags LicensemanagerLicenseConfiguration#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#tags_all LicensemanagerLicenseConfiguration#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html aws_licensemanager_license_configuration}.
 */
export declare class LicensemanagerLicenseConfiguration extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html aws_licensemanager_license_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LicensemanagerLicenseConfigurationConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _licenseCount?;
    get licenseCount(): number;
    set licenseCount(value: number);
    resetLicenseCount(): void;
    get licenseCountInput(): number | undefined;
    private _licenseCountHardLimit?;
    get licenseCountHardLimit(): boolean;
    set licenseCountHardLimit(value: boolean);
    resetLicenseCountHardLimit(): void;
    get licenseCountHardLimitInput(): boolean | undefined;
    private _licenseCountingType;
    get licenseCountingType(): string;
    set licenseCountingType(value: string);
    get licenseCountingTypeInput(): string;
    private _licenseRules?;
    get licenseRules(): string[];
    set licenseRules(value: string[]);
    resetLicenseRules(): void;
    get licenseRulesInput(): string[] | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get ownerAccountId(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
