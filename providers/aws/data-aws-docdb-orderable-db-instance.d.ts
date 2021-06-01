import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDocdbOrderableDbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html#engine DataAwsDocdbOrderableDbInstance#engine}.
     */
    readonly engine?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html#engine_version DataAwsDocdbOrderableDbInstance#engine_version}.
     */
    readonly engineVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html#instance_class DataAwsDocdbOrderableDbInstance#instance_class}.
     */
    readonly instanceClass?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html#license_model DataAwsDocdbOrderableDbInstance#license_model}.
     */
    readonly licenseModel?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html#preferred_instance_classes DataAwsDocdbOrderableDbInstance#preferred_instance_classes}.
     */
    readonly preferredInstanceClasses?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html#vpc DataAwsDocdbOrderableDbInstance#vpc}.
     */
    readonly vpc?: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html aws_docdb_orderable_db_instance}.
 */
export declare class DataAwsDocdbOrderableDbInstance extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html aws_docdb_orderable_db_instance} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsDocdbOrderableDbInstanceConfig);
    get availabilityZones(): string[];
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string | undefined;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string | undefined;
    get id(): string;
    private _instanceClass?;
    get instanceClass(): string;
    set instanceClass(value: string);
    resetInstanceClass(): void;
    get instanceClassInput(): string | undefined;
    private _licenseModel?;
    get licenseModel(): string;
    set licenseModel(value: string);
    resetLicenseModel(): void;
    get licenseModelInput(): string | undefined;
    private _preferredInstanceClasses?;
    get preferredInstanceClasses(): string[];
    set preferredInstanceClasses(value: string[]);
    resetPreferredInstanceClasses(): void;
    get preferredInstanceClassesInput(): string[] | undefined;
    private _vpc?;
    get vpc(): boolean;
    set vpc(value: boolean);
    resetVpc(): void;
    get vpcInput(): boolean | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
